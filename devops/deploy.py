import mimetypes
import os
import boto3
from dotenv import load_dotenv

mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('application/javascript', '.mjs')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/wasm', '.wasm')
mimetypes.add_type('application/json', '.json')


def main():
    load_dotenv()  # take environment variables from .env.

    bucketName = 'readthai'

    uploadFrontDistToBucket(bucketName)
    print('done')


def filePutContents(fl: str, dt: str):
    flHandle = open(fl, 'w')
    flHandle.write(dt)
    flHandle.close()


def fileGetContents(fl: str) -> str:
    flHandle = open(fl, 'r')
    contents = flHandle.read()
    flHandle.close()
    return contents


def uploadFrontDistToBucket(bucketName: str):
    print('uploadFrontDistToBucket')
    session = boto3.session.Session()
    s3 = session.client(service_name='s3', endpoint_url='https://storage.yandexcloud.net')

    distDir = 'front/dist'
    distDir = 'front/.output/public'
    if not os.path.isdir(distDir):
        raise Exception(distDir + ' not found')

    upload_to_s3(s3, bucketName, distDir)


def upload_to_s3(s3, bucket_name, source_dir, prefix=''):
    for item in os.listdir(source_dir):
        item_path = os.path.join(source_dir, item)

        print('uploading ', item_path)
        if os.path.isfile(item_path):
            content_type, _ = mimetypes.guess_type(item_path)
            extra_args = {'ContentType': content_type or 'application/octet-stream'}
            s3.upload_file(item_path, bucket_name, os.path.join(prefix, item), ExtraArgs=extra_args)
        elif os.path.isdir(item_path):
            # Recursively upload the folder
            upload_to_s3(s3, bucket_name, item_path, prefix=os.path.join(prefix, item))


if __name__ == '__main__':
    main()

import cv2
import sys
import os
import fnmatch
import numpy as np


def sharpen(image):
    kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
    new_image = cv2.filter2D(image, -1, kernel)
    cv2.imshow('Sharpened', new_image)
    cv2.waitKey(0)
    return new_image


def blur(image):
    kernels = [3, 5, 9, 13]
    for idx, k in enumerate(kernels):
        image_blur = cv2.blur(image, ksize=(k, k))
        cv2.imshow(str(k), image_blur)
        cv2.waitKey(0)
    return


def resize(filename, width, height):
    image = cv2.imread(filename)
    cv2.imshow('Original image', image)
    cv2.waitKey(0)
    org_height, org_width = image.shape[0:2]
    print(org_width)
    print(org_height)
    if org_width >= org_height:
        new_image = cv2.resize(image, (width, height))
    else:
        new_image = cv2.resize(image, (height, width))
    return filename, new_image


list_of_files = os.listdir('.')
pattern = "*.jpg"
n = len(sys.argv)
if n == 3:
    height = int(sys.argv[1])
    width = int(sys.argv[2])
else:
    width = 1280
    height = 960

if not os.path.exists('new_folder'):
    os.makedirs('new_folder')

for filename in list_of_files:
    if fnmatch.fnmatch(filename, pattern):
        filename, new_image = resize(filename, width, height)
        cv2.imwrite('new_folder\\' + filename, new_image)
        print(new_image.shape[0:2])

# cv2.imshow('resized image', new_image)
# cv2.waitKey(0)
# blur(new_image)
#image = sharpen(new_image)

def findMaximum(arr, low, high):
    a = low
    b = high
    while (a < b):
        mid = round((a+b)/2)
        if arr[mid] < arr[mid+1]:
            a = mid+1
        if arr[mid] > arr[mid+1]:
            b = mid
    return arr[a]


# Unit test to check above functions
arr = [1, 3, 50, 10, 9, 7, 6]
arr2 = [1, 2, 3, 5, 4, 2, 1]
n = len(arr)
print("The maximum element is %d" % findMaximum(arr, 0, n-1))
print("The maximum element is %d" % findMaximum(arr2, 0, n-1))

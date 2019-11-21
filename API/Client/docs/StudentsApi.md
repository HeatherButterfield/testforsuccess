# swagger_client.StudentsApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_student**](StudentsApi.md#add_student) | **POST** /students | Add new student
[**delete_student**](StudentsApi.md#delete_student) | **DELETE** /students/{studentId} | Deletes a student
[**get_student_by_id**](StudentsApi.md#get_student_by_id) | **GET** /students/{studentId} | Find Student by ID
[**update_student**](StudentsApi.md#update_student) | **PUT** /students | Update existing student


# **add_student**
> add_student(body)

Add new student

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StudentsApi()
body = swagger_client.Student() # Student | Student object that needs added to system

try: 
    # Add new student
    api_instance.add_student(body)
except ApiException as e:
    print("Exception when calling StudentsApi->add_student: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Student**](Student.md)| Student object that needs added to system | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_student**
> delete_student(student_id)

Deletes a student

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StudentsApi()
student_id = 789 # int | Student id to delete

try: 
    # Deletes a student
    api_instance.delete_student(student_id)
except ApiException as e:
    print("Exception when calling StudentsApi->delete_student: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student_id** | **int**| Student id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_student_by_id**
> Student get_student_by_id(student_id)

Find Student by ID

Returns a single student

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StudentsApi()
student_id = 789 # int | ID of student to return

try: 
    # Find Student by ID
    api_response = api_instance.get_student_by_id(student_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling StudentsApi->get_student_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **student_id** | **int**| ID of student to return | 

### Return type

[**Student**](Student.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_student**
> update_student(body)

Update existing student

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StudentsApi()
body = swagger_client.Student() # Student | Student object that needs to be added

try: 
    # Update existing student
    api_instance.update_student(body)
except ApiException as e:
    print("Exception when calling StudentsApi->update_student: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Student**](Student.md)| Student object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# swagger_client.TeachersApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_teacher**](TeachersApi.md#add_teacher) | **POST** /teachers | Add new teacher
[**delete_teacher**](TeachersApi.md#delete_teacher) | **DELETE** /teachers/{teacherId} | Deletes a teacher
[**get_teacher_by_id**](TeachersApi.md#get_teacher_by_id) | **GET** /teachers/{teacherId} | Find Teacher by ID
[**update_teacher**](TeachersApi.md#update_teacher) | **PUT** /teachers | Update existing teacher


# **add_teacher**
> add_teacher(body)

Add new teacher

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TeachersApi()
body = swagger_client.Teacher() # Teacher | Teacher object that needs added to system

try: 
    # Add new teacher
    api_instance.add_teacher(body)
except ApiException as e:
    print("Exception when calling TeachersApi->add_teacher: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Teacher**](Teacher.md)| Teacher object that needs added to system | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_teacher**
> delete_teacher(teacher_id)

Deletes a teacher

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TeachersApi()
teacher_id = 789 # int | Teacher id to delete

try: 
    # Deletes a teacher
    api_instance.delete_teacher(teacher_id)
except ApiException as e:
    print("Exception when calling TeachersApi->delete_teacher: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teacher_id** | **int**| Teacher id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_teacher_by_id**
> Teacher get_teacher_by_id(teacher_id)

Find Teacher by ID

Returns a single teacher

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TeachersApi()
teacher_id = 789 # int | ID of teacher to return

try: 
    # Find Teacher by ID
    api_response = api_instance.get_teacher_by_id(teacher_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TeachersApi->get_teacher_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teacher_id** | **int**| ID of teacher to return | 

### Return type

[**Teacher**](Teacher.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_teacher**
> update_teacher(body)

Update existing teacher

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TeachersApi()
body = swagger_client.Teacher() # Teacher | Teacher object that needs to be added

try: 
    # Update existing teacher
    api_instance.update_teacher(body)
except ApiException as e:
    print("Exception when calling TeachersApi->update_teacher: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Teacher**](Teacher.md)| Teacher object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


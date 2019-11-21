# swagger_client.ProblemsApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_problem**](ProblemsApi.md#add_problem) | **POST** /problem | Add new problem
[**delete_problem**](ProblemsApi.md#delete_problem) | **DELETE** /problem/{problemId} | Deletes a problem
[**get_problem_by_id**](ProblemsApi.md#get_problem_by_id) | **GET** /problem/{problemId} | Find Problem by ID
[**update_problem**](ProblemsApi.md#update_problem) | **PUT** /problem | Update existing problem


# **add_problem**
> add_problem(body)

Add new problem

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProblemsApi()
body = swagger_client.Problems() # Problems | Problem object that needs added

try: 
    # Add new problem
    api_instance.add_problem(body)
except ApiException as e:
    print("Exception when calling ProblemsApi->add_problem: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Problems**](Problems.md)| Problem object that needs added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_problem**
> delete_problem(problem_id)

Deletes a problem

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProblemsApi()
problem_id = 789 # int | Problem id to delete

try: 
    # Deletes a problem
    api_instance.delete_problem(problem_id)
except ApiException as e:
    print("Exception when calling ProblemsApi->delete_problem: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **problem_id** | **int**| Problem id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_problem_by_id**
> Problems get_problem_by_id(problem_id)

Find Problem by ID

Returns a single problem

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProblemsApi()
problem_id = 789 # int | ID of problem to return

try: 
    # Find Problem by ID
    api_response = api_instance.get_problem_by_id(problem_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ProblemsApi->get_problem_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **problem_id** | **int**| ID of problem to return | 

### Return type

[**Problems**](Problems.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_problem**
> update_problem(body)

Update existing problem

### Example 
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ProblemsApi()
body = swagger_client.Problems() # Problems | Problem object that needs to be added

try: 
    # Update existing problem
    api_instance.update_problem(body)
except ApiException as e:
    print("Exception when calling ProblemsApi->update_problem: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Problems**](Problems.md)| Problem object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


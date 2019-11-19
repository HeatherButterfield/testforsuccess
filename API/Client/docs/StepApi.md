# swagger_client.StepApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_step**](StepApi.md#add_step) | **POST** /step | Add new step
[**delete_step**](StepApi.md#delete_step) | **DELETE** /step/{stepId} | Deletes a step
[**get_step_by_id**](StepApi.md#get_step_by_id) | **GET** /step/{stepId} | Find Step by ID
[**update_step**](StepApi.md#update_step) | **PUT** /step | Update existing step


# **add_step**
> add_step(body)

Add new step

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StepApi()
body = swagger_client.Step() # Step | Step object that needs added

try:
    # Add new step
    api_instance.add_step(body)
except ApiException as e:
    print("Exception when calling StepApi->add_step: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Step**](Step.md)| Step object that needs added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_step**
> delete_step(step_id)

Deletes a step

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StepApi()
step_id = 789 # int | Step id to delete

try:
    # Deletes a step
    api_instance.delete_step(step_id)
except ApiException as e:
    print("Exception when calling StepApi->delete_step: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **step_id** | **int**| Step id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_step_by_id**
> Step get_step_by_id(step_id)

Find Step by ID

Returns a single step

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StepApi()
step_id = 789 # int | ID of step to return

try:
    # Find Step by ID
    api_response = api_instance.get_step_by_id(step_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling StepApi->get_step_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **step_id** | **int**| ID of step to return | 

### Return type

[**Step**](Step.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_step**
> update_step(body)

Update existing step

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.StepApi()
body = swagger_client.Step() # Step | Step object that needs to be added

try:
    # Update existing step
    api_instance.update_step(body)
except ApiException as e:
    print("Exception when calling StepApi->update_step: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Step**](Step.md)| Step object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


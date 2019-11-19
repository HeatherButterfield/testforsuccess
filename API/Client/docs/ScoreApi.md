# swagger_client.ScoreApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_score**](ScoreApi.md#add_score) | **POST** /score | Add new score
[**delete_score**](ScoreApi.md#delete_score) | **DELETE** /score/{scoreId} | Deletes a score
[**get_score_by_id**](ScoreApi.md#get_score_by_id) | **GET** /score/{scoreId} | Find Score by ID
[**update_score**](ScoreApi.md#update_score) | **PUT** /score | Update existing score


# **add_score**
> add_score(body)

Add new score

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ScoreApi()
body = swagger_client.Scores() # Scores | Score object that needs added

try:
    # Add new score
    api_instance.add_score(body)
except ApiException as e:
    print("Exception when calling ScoreApi->add_score: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Scores**](Scores.md)| Score object that needs added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_score**
> delete_score(score_id)

Deletes a score

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ScoreApi()
score_id = 789 # int | Score id to delete

try:
    # Deletes a score
    api_instance.delete_score(score_id)
except ApiException as e:
    print("Exception when calling ScoreApi->delete_score: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score_id** | **int**| Score id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_score_by_id**
> Scores get_score_by_id(score_id)

Find Score by ID

Returns a single score

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ScoreApi()
score_id = 789 # int | ID of score to return

try:
    # Find Score by ID
    api_response = api_instance.get_score_by_id(score_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling ScoreApi->get_score_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score_id** | **int**| ID of score to return | 

### Return type

[**Scores**](Scores.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_score**
> update_score(body)

Update existing score

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.ScoreApi()
body = swagger_client.Scores() # Scores | Score object that needs to be added

try:
    # Update existing score
    api_instance.update_score(body)
except ApiException as e:
    print("Exception when calling ScoreApi->update_score: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Scores**](Scores.md)| Score object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


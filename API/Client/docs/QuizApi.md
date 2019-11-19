# swagger_client.QuizApi

All URIs are relative to *https://ec2-23-21-94-99.compute-1.amazonaws.com/dfdl2gmjf1u73c*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_quiz**](QuizApi.md#add_quiz) | **POST** /quiz | Add new quiz
[**delete_quiz**](QuizApi.md#delete_quiz) | **DELETE** /quiz/{quizId} | Deletes a quiz
[**get_quiz_by_id**](QuizApi.md#get_quiz_by_id) | **GET** /quiz/{quizId} | Find Quiz by ID
[**update_quiz**](QuizApi.md#update_quiz) | **PUT** /quiz | Update existing quiz


# **add_quiz**
> add_quiz(body)

Add new quiz

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.QuizApi()
body = swagger_client.Quiz() # Quiz | Quiz object that needs added

try:
    # Add new quiz
    api_instance.add_quiz(body)
except ApiException as e:
    print("Exception when calling QuizApi->add_quiz: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quiz**](Quiz.md)| Quiz object that needs added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_quiz**
> delete_quiz(quiz_id)

Deletes a quiz

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.QuizApi()
quiz_id = 789 # int | Quiz id to delete

try:
    # Deletes a quiz
    api_instance.delete_quiz(quiz_id)
except ApiException as e:
    print("Exception when calling QuizApi->delete_quiz: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_id** | **int**| Quiz id to delete | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_quiz_by_id**
> Quiz get_quiz_by_id(quiz_id)

Find Quiz by ID

Returns a single quiz

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.QuizApi()
quiz_id = 789 # int | ID of quiz to return

try:
    # Find Quiz by ID
    api_response = api_instance.get_quiz_by_id(quiz_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling QuizApi->get_quiz_by_id: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quiz_id** | **int**| ID of quiz to return | 

### Return type

[**Quiz**](Quiz.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_quiz**
> update_quiz(body)

Update existing quiz

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.QuizApi()
body = swagger_client.Quiz() # Quiz | Quiz object that needs to be added

try:
    # Update existing quiz
    api_instance.update_quiz(body)
except ApiException as e:
    print("Exception when calling QuizApi->update_quiz: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Quiz**](Quiz.md)| Quiz object that needs to be added | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


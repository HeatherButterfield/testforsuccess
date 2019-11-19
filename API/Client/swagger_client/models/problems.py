# coding: utf-8

"""
    Test_4_Success

    API for Test4Success  # noqa: E501

    OpenAPI spec version: 1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class Problems(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'int',
        'prob_text': 'str',
        'current_step': 'int',
        'answer': 'bool',
        'next_step': 'int'
    }

    attribute_map = {
        'id': 'id',
        'prob_text': 'probText',
        'current_step': 'currentStep',
        'answer': 'answer',
        'next_step': 'nextStep'
    }

    def __init__(self, id=None, prob_text=None, current_step=None, answer=None, next_step=None):  # noqa: E501
        """Problems - a model defined in Swagger"""  # noqa: E501

        self._id = None
        self._prob_text = None
        self._current_step = None
        self._answer = None
        self._next_step = None
        self.discriminator = None

        if id is not None:
            self.id = id
        if prob_text is not None:
            self.prob_text = prob_text
        if current_step is not None:
            self.current_step = current_step
        if answer is not None:
            self.answer = answer
        if next_step is not None:
            self.next_step = next_step

    @property
    def id(self):
        """Gets the id of this Problems.  # noqa: E501


        :return: The id of this Problems.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Problems.


        :param id: The id of this Problems.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def prob_text(self):
        """Gets the prob_text of this Problems.  # noqa: E501


        :return: The prob_text of this Problems.  # noqa: E501
        :rtype: str
        """
        return self._prob_text

    @prob_text.setter
    def prob_text(self, prob_text):
        """Sets the prob_text of this Problems.


        :param prob_text: The prob_text of this Problems.  # noqa: E501
        :type: str
        """

        self._prob_text = prob_text

    @property
    def current_step(self):
        """Gets the current_step of this Problems.  # noqa: E501


        :return: The current_step of this Problems.  # noqa: E501
        :rtype: int
        """
        return self._current_step

    @current_step.setter
    def current_step(self, current_step):
        """Sets the current_step of this Problems.


        :param current_step: The current_step of this Problems.  # noqa: E501
        :type: int
        """

        self._current_step = current_step

    @property
    def answer(self):
        """Gets the answer of this Problems.  # noqa: E501


        :return: The answer of this Problems.  # noqa: E501
        :rtype: bool
        """
        return self._answer

    @answer.setter
    def answer(self, answer):
        """Sets the answer of this Problems.


        :param answer: The answer of this Problems.  # noqa: E501
        :type: bool
        """

        self._answer = answer

    @property
    def next_step(self):
        """Gets the next_step of this Problems.  # noqa: E501


        :return: The next_step of this Problems.  # noqa: E501
        :rtype: int
        """
        return self._next_step

    @next_step.setter
    def next_step(self, next_step):
        """Sets the next_step of this Problems.


        :param next_step: The next_step of this Problems.  # noqa: E501
        :type: int
        """

        self._next_step = next_step

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(Problems, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, Problems):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUsersController(BaseTestCase):
    """UsersController integration test stubs"""

    def test_add_user(self):
        """Test case for add_user

        Add new user to system
        """
        body = User()
        response = self.client.open(
            '/dfdl2gmjf1u73c/users',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_user(self):
        """Test case for delete_user

        Deletes a user
        """
        headers = [('api_key', 'api_key_example')]
        response = self.client.open(
            '/dfdl2gmjf1u73c/users/{userId}'.format(userId=789),
            method='DELETE',
            headers=headers)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user_by_id(self):
        """Test case for get_user_by_id

        Find User by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/users/{userId}'.format(userId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_user(self):
        """Test case for update_user

        Update existing user
        """
        body = User()
        response = self.client.open(
            '/dfdl2gmjf1u73c/users',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()

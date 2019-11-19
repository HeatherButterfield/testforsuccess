# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.teacher import Teacher  # noqa: E501
from swagger_server.test import BaseTestCase


class TestTeachersController(BaseTestCase):
    """TeachersController integration test stubs"""

    def test_add_teacher(self):
        """Test case for add_teacher

        Add new teacher
        """
        body = Teacher()
        response = self.client.open(
            '/dfdl2gmjf1u73c/teachers',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_teacher(self):
        """Test case for delete_teacher

        Deletes a teacher
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/teachers/{teacherId}'.format(teacherId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_teacher_by_id(self):
        """Test case for get_teacher_by_id

        Find Teacher by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/teachers/{teacherId}'.format(teacherId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_teacher(self):
        """Test case for update_teacher

        Update existing teacher
        """
        body = Teacher()
        response = self.client.open(
            '/dfdl2gmjf1u73c/teachers',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()

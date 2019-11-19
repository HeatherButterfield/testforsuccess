# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.student import Student  # noqa: E501
from swagger_server.test import BaseTestCase


class TestStudentsController(BaseTestCase):
    """StudentsController integration test stubs"""

    def test_add_student(self):
        """Test case for add_student

        Add new student
        """
        body = Student()
        response = self.client.open(
            '/dfdl2gmjf1u73c/students',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_student(self):
        """Test case for delete_student

        Deletes a student
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/students/{studentId}'.format(studentId=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_student_by_id(self):
        """Test case for get_student_by_id

        Find Student by ID
        """
        response = self.client.open(
            '/dfdl2gmjf1u73c/students/{studentId}'.format(studentId=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_student(self):
        """Test case for update_student

        Update existing student
        """
        body = Student()
        response = self.client.open(
            '/dfdl2gmjf1u73c/students',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()

import connexion
import six

from swagger_server.models.student import Student  # noqa: E501
from swagger_server import util


def add_student(body):  # noqa: E501
    """Add new student

     # noqa: E501

    :param body: Student object that needs added to system
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Student.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_student(studentId):  # noqa: E501
    """Deletes a student

     # noqa: E501

    :param studentId: Student id to delete
    :type studentId: int

    :rtype: None
    """
    return 'do some magic!'


def get_student_by_id(studentId):  # noqa: E501
    """Find Student by ID

    Returns a single student # noqa: E501

    :param studentId: ID of student to return
    :type studentId: int

    :rtype: Student
    """
    return 'do some magic!'


def update_student(body):  # noqa: E501
    """Update existing student

     # noqa: E501

    :param body: Student object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Student.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'

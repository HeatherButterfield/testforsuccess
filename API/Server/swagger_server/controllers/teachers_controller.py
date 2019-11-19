import connexion
import six

from swagger_server.models.teacher import Teacher  # noqa: E501
from swagger_server import util


def add_teacher(body):  # noqa: E501
    """Add new teacher

     # noqa: E501

    :param body: Teacher object that needs added to system
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Teacher.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_teacher(teacherId):  # noqa: E501
    """Deletes a teacher

     # noqa: E501

    :param teacherId: Teacher id to delete
    :type teacherId: int

    :rtype: None
    """
    return 'do some magic!'


def get_teacher_by_id(teacherId):  # noqa: E501
    """Find Teacher by ID

    Returns a single teacher # noqa: E501

    :param teacherId: ID of teacher to return
    :type teacherId: int

    :rtype: Teacher
    """
    return 'do some magic!'


def update_teacher(body):  # noqa: E501
    """Update existing teacher

     # noqa: E501

    :param body: Teacher object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Teacher.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'

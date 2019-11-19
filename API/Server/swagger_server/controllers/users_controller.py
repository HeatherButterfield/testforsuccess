import connexion
import six

from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def add_user(body):  # noqa: E501
    """Add new user to system

     # noqa: E501

    :param body: User object that needs added to system
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_user(userId, api_key=None):  # noqa: E501
    """Deletes a user

     # noqa: E501

    :param userId: User id to delete
    :type userId: int
    :param api_key: 
    :type api_key: str

    :rtype: None
    """
    return 'do some magic!'


def get_user_by_id(userId):  # noqa: E501
    """Find User by ID

    Returns a single user # noqa: E501

    :param userId: ID of user to return
    :type userId: int

    :rtype: User
    """
    return 'do some magic!'


def update_user(body):  # noqa: E501
    """Update existing user

     # noqa: E501

    :param body: User object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'

import connexion
import six

from swagger_server.models.step import Step  # noqa: E501
from swagger_server import util


def add_step(body):  # noqa: E501
    """Add new step

     # noqa: E501

    :param body: Step object that needs added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Step.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_step(stepId):  # noqa: E501
    """Deletes a step

     # noqa: E501

    :param stepId: Step id to delete
    :type stepId: int

    :rtype: None
    """
    return 'do some magic!'


def get_step_by_id(stepId):  # noqa: E501
    """Find Step by ID

    Returns a single step # noqa: E501

    :param stepId: ID of step to return
    :type stepId: int

    :rtype: Step
    """
    return 'do some magic!'


def update_step(body):  # noqa: E501
    """Update existing step

     # noqa: E501

    :param body: Step object that needs to be added
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = Step.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'

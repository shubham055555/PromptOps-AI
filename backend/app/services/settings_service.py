from sqlalchemy.orm import Session

from app.models.settings import AppSetting


def get_all_settings(db: Session):

    settings = db.query(AppSetting).all()

    return {

        item.key: item.value

        for item in settings

    }


def save_setting(

    db: Session,

    key: str,

    value: str,

):

    setting = (

        db.query(AppSetting)

        .filter(AppSetting.key == key)

        .first()

    )

    if setting:

        setting.value = value

    else:

        setting = AppSetting(

            key=key,

            value=value,

        )

        db.add(setting)

    db.commit()

    return setting
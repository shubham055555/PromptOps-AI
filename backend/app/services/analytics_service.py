from sqlalchemy.orm import Session

from app.services.stats_service import (
    get_dashboard_stats,
)

from app.services.chart_service import (
    get_message_distribution,
)


def get_analytics(db: Session):

    stats = get_dashboard_stats(db)

    charts = {

        "message_distribution":
            get_message_distribution(db),

    }

    return {

        "stats": stats,

        "charts": charts,

    }
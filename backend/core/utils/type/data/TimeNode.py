from datetime import datetime
from dataclasses import dataclass

@dataclass
class TimeNode:
    acquisitionTime: datetime | None
    analyseTime: datetime | None

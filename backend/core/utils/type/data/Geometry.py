from dataclasses import dataclass
from typing import List

@dataclass
class Geometry:
    type: str  # 几何类型，例如 'Point', 'LineString', 'Polygon' 等
    coordinates: List[List[float]]  # 几何坐标
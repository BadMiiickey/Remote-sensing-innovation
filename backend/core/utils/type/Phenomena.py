from core.utils.type.Geometry import Geometry

from dataclasses import dataclass

@dataclass
class Phenomena:
    type: str # 现象类型
    geometry: Geometry # 现象几何信息
    confidence: float # 置信度
    source: str # 数据来源

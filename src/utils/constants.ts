
export const locationNames: { [key: string]: string[] } = {
  '서울시': ['종로구', '중구', '용산구', '성동구', '광진구', '동대문구', '중랑구', '성북구', '강북구', '도봉구', '노원구', '은평구', '서대문구', '마포구', '양천구', '강서구', '구로구', '금천구', '영등포구', '동작구', '관악구', '서초구', '강남구', '송파구', '강동구'],
  '경기도': ['수원시', '고양시', '용인시', '성남시', '부천시', '화성시', '안산시', '남양주시', '안양시', '평택시', '시흥시', '파주시', '의정부시', '김포시', '광주시', '광명시', '군포시', '하남시', '오산시', '양주시', '이천시', '구리시', '안성시', '포천시', '의왕시', '양평군', '여주시', '동두천시', '가평군', '과천시', '연천군'],
  '인천시': ['중구', '동구', '미추홀구', '연수구', '남동구', '부평구', '계양구', '서구', '강화군', '옹진군'],
  '부산시': ['중구', '서구', '동구', '영도구', '부산진구', '동래구', '남구', '북구', '해운대구', '사하구', '금정구', '강서구', '연제구', '수영구', '사상구', '기장군'],
  '대전시': ['동구', '중구', '서구', '유성구', '대덕구'],
  '대구시': ['중구', '동구', '서구', '남구', '북구', '수성구', '달서구', '달성군'],
  '울산시': ['중구', '남구', '동구', '북구', '울주군'],
  '세종시': [],
  '광주시': ['동구', '서구', '남구', '북구', '광산구'],
  '강원도': ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시', '홍천군', '횡성군', '영월군', '평창군', '정선군', '철원군', '화천군', '양구군', '인제군', '고성군', '양양군'],
  '충청북도': ['청주시', '충주시', '제천시', '보은군', '옥천군', '영동군', '증평군', '진천군', '괴산군', '음성군', '단양군'],
  '충청남도': ['천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '금산군', '부여군', '서천군', '청양군', '홍성군', '예산군', '태안군'],
  '경상북도': ['포항시', '경주시', '김천시', '안동시', '구미시', '영주시', '영천시', '상주시', '문경시', '경산시', '군위군', '의성군', '청송군', '영양군', '영덕군', '청도군', '고령군', '성주군', '칠곡군', '예천군', '봉화군', '울진군', '울릉군'],
  '경상남도': ['창원시', '진주시', '통영시', '사천시', '김해시', '밀양시', '거제시', '양산시', '의령군', '함안군', '창녕군', '고성군', '남해군', '하동군', '산청군', '함양군', '거창군', '합천군'],
  '전라북도': ['전주시', '군산시', '익산시', '정읍시', '남원시', '김제시', '완주군', '진안군', '무주군', '장수군', '임실군', '순창군', '고창군', '부안군'],
  '전라남도': ['목포시', '여수시', '순천시', '나주시', '광양시', '담양군', '곡성군', '구례군', '고흥군', '보성군', '화순군', '장흥군', '강진군', '해남군', '영암군', '무안군', '함평군', '영광군', '장성군', '완도군', '진도군', '신안군'],
  '제주도': ['제주시', '서귀포시'],
};

export const districtInfo: { [key: string]: { LAT: number, LON: number, DONG: number } } = {
  "강남구": {
    "LAT": 37.497113,
    "LON": 127.062318,
    "DONG": 1168000000
  },
  "강동구": {
    "LAT": 37.547284,
    "LON": 127.147819,
    "DONG": 1174000000
  },
  "강북구": {
    "LAT": 37.638649,
    "LON": 127.021337,
    "DONG": 1130500000
  },
  "강서구": {
    "LAT": 37.557012,
    "LON": 126.823391,
    "DONG": 1150000000
  },
  "관악구": {
    "LAT": 37.477748,
    "LON": 126.950788,
    "DONG": 1162000000
  },
  "광진구": {
    "LAT": 37.548608,
    "LON": 127.082634,
    "DONG": 1121500000
  },
  "구로구": {
    "LAT": 37.493441,
    "LON": 126.851923,
    "DONG": 1153000000
  },
  "금천구": {
    "LAT": 37.466765,
    "LON": 126.898586,
    "DONG": 1154500000
  },
  "노원구": {
    "LAT": 37.639354,
    "LON": 127.072757,
    "DONG": 1135000000
  },
  "도봉구": {
    "LAT": 37.660125,
    "LON": 127.037006,
    "DONG": 1132000000
  },
  "동대문구": {
    "LAT": 37.582263,
    "LON": 127.049773,
    "DONG": 1123000000
  },
  "동작구": {
    "LAT": 37.500862,
    "LON": 126.949992,
    "DONG": 1159000000
  },
  "마포구": {
    "LAT": 37.551057,
    "LON": 126.931071,
    "DONG": 1144000000
  },
  "서대문구": {
    "LAT": 37.569822,
    "LON": 126.949121,
    "DONG": 1141000000
  },
  "서초구": {
    "LAT": 37.474402,
    "LON": 127.033607,
    "DONG": 1165000000
  },
  "성동구": {
    "LAT": 37.555878,
    "LON": 127.035161,
    "DONG": 1120000000
  },
  "성북구": {
    "LAT": 37.591859,
    "LON": 127.020048,
    "DONG": 1129000000
  },
  "송파구": {
    "LAT": 37.502988,
    "LON": 127.11912,
    "DONG": 1171000000
  },
  "양천구": {
    "LAT": 37.530285,
    "LON": 126.853761,
    "DONG": 1147000000
  },
  "영등포구": {
    "LAT": 37.522614,
    "LON": 126.899129,
    "DONG": 1156000000
  },
  "용산구": {
    "LAT": 37.536019,
    "LON": 126.972387,
    "DONG": 1117000000
  },
  "은평구": {
    "LAT": 37.607088,
    "LON": 126.917073,
    "DONG": 1138000000
  },
  "종로구": {
    "LAT": 37.5775,
    "LON": 126.982828,
    "DONG": 1111000000
  },
  "중구": {
    "LAT": 37.563092,
    "LON": 126.988644,
    "DONG": 1114000000
  },
  "중랑구": {
    "LAT": 37.59927,
    "LON": 127.087847,
    "DONG": 1126000000
  }
}

export const stepNames: string[] = [
  '1. 기본 계획 수립', '2. 안전진단', '3. 정비구역 지정', '4. 추진위원회 승인', '5. 조합설립 인가', '6. 사업시행 인가', '7. 관리처분 인가', '8. 철거 신고', '9. 착공 및 분양', '10. 준공 및 청산',
];

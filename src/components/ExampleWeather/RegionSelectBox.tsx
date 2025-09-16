import {
  Select,
  MenuItem,
  ListSubheader,
  SelectChangeEvent,
} from '@mui/material';

const regions = [
  {
    name: '北海道地方',
    areas: [
      { name: '宗谷地方', code: '011000' },
      { name: '上川・留萌地方', code: '012000' },
      { name: '網走・北見・紋別地方', code: '013000' },
      { name: '十勝地方', code: '014030' },
      { name: '釧路・根室地方', code: '014100' },
      { name: '胆振・日高地方', code: '015000' },
      { name: '石狩・空知・後志地方', code: '016000' },
      { name: '渡島・檜山地方', code: '017000' },
    ],
  },
  {
    name: '東北地方',
    areas: [
      { name: '青森県', code: '020000' },
      { name: '岩手県', code: '030000' },
      { name: '宮城県', code: '040000' },
      { name: '秋田県', code: '050000' },
      { name: '山形県', code: '060000' },
      { name: '福島県', code: '070000' },
    ],
  },
  {
    name: '関東甲信地方',
    areas: [
      { name: '茨城県', code: '080000' },
      { name: '栃木県', code: '090000' },
      { name: '群馬県', code: '100000' },
      { name: '埼玉県', code: '110000' },
      { name: '千葉県', code: '120000' },
      { name: '東京都', code: '130000' },
      { name: '神奈川県', code: '140000' },
      { name: '山梨県', code: '190000' },
      { name: '長野県', code: '200000' },
    ],
  },
  {
    name: '東海地方',
    areas: [
      { name: '岐阜県', code: '210000' },
      { name: '静岡県', code: '220000' },
      { name: '愛知県', code: '230000' },
      { name: '三重県', code: '240000' },
    ],
  },
  {
    name: '北陸地方',
    areas: [
      { name: '新潟県', code: '150000' },
      { name: '富山県', code: '160000' },
      { name: '石川県', code: '170000' },
      { name: '福井県', code: '180000' },
    ],
  },
  {
    name: '近畿地方',
    areas: [
      { name: '滋賀県', code: '250000' },
      { name: '京都府', code: '260000' },
      { name: '大阪府', code: '270000' },
      { name: '兵庫県', code: '280000' },
      { name: '奈良県', code: '290000' },
      { name: '和歌山県', code: '300000' },
    ],
  },
  {
    name: '中国地方（山口県を除く）',
    areas: [
      { name: '鳥取県', code: '310000' },
      { name: '島根県', code: '320000' },
      { name: '岡山県', code: '330000' },
      { name: '広島県', code: '340000' },
    ],
  },
  {
    name: '四国地方',
    areas: [
      { name: '徳島県', code: '360000' },
      { name: '香川県', code: '370000' },
      { name: '愛媛県', code: '380000' },
      { name: '高知県', code: '390000' },
    ],
  },
  {
    name: '九州北部地方（山口県を含む）',
    areas: [
      { name: '山口県', code: '350000' },
      { name: '福岡県', code: '400000' },
      { name: '佐賀県', code: '410000' },
      { name: '長崎県', code: '420000' },
      { name: '熊本県', code: '430000' },
      { name: '大分県', code: '440000' },
    ],
  },
  {
    name: '九州南部・奄美地方',
    areas: [
      { name: '宮崎県', code: '450000' },
      { name: '奄美地方', code: '460040' },
      { name: '鹿児島県（奄美地方除く）', code: '460100' },
    ],
  },
  {
    name: '沖縄地方',
    areas: [
      { name: '沖縄本島地方', code: '471000' },
      { name: '大東島地方', code: '472000' },
      { name: '宮古島地方', code: '473000' },
      { name: '八重山地方', code: '474000' },
    ],
  },
];

type RegionSelectBoxProps = {
  value: string;
  onChange: (value: string) => void; // 外部に渡す型は string
};

const RegionSelectBox = ({ value, onChange }: RegionSelectBoxProps) => {
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value); // string に変換して渡す
  };

  return (
    <Select
      value={value}
      onChange={handleChange}
      sx={{ minWidth: 200, ml: 1, mb: 2 }}
    >
      {regions.map((region) => [
        <ListSubheader key={region.name}>{region.name}</ListSubheader>,
        region.areas.map((area) => (
          <MenuItem key={area.code} value={area.code}>
            {area.name}
          </MenuItem>
        )),
      ])}
    </Select>
  );
};

export default RegionSelectBox;

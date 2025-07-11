/**
 * 주식 관련 타입 정의
 */

/**
 * 주요 지수 데이터 타입
 */
export interface MarketIndex {
  /** 지수명 */
  name: string;
  /** 현재 가격 */
  value: string;
  /** 전일대비 변화 */
  change: string;
  /** 전일대비 변화율 */
  changePercent: string;
  /** 상승 여부 */
  isPositive: boolean;
}

/**
 * 인기 종목 데이터 타입
 */
export interface PopularStock {
  /** 순위 */
  rank: number;
  /** 종목명 */
  name: string;
  /** 종목코드 */
  code: string;
  /** 현재 가격 */
  price: string;
  /** 전일대비 변화율 */
  change: string;
  /** 상승 여부 */
  isPositive: boolean;
}

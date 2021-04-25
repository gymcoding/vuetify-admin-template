<template>
  <v-container fluid>
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="auto"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ item.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.subTitle }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Share
            </v-btn>

            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: 'HTML&CSS 강의', subTitle: '랍니다.', price: 5000, username: '국가공인' },
      { title: '컴퓨터(노트북, 데스크톱 PC), ', subTitle: '인터넷 IT 문의 및 문제 해결 답변', price: 0, username: '' },
      { title: '컴퓨터&노트', subTitle: '북&휴대폰 외 IT기기 기술 상담', price: 0, username: '' },
      { title: '노트북 길잡이 가이드 상담', subTitle: 'IT기기 기술 노트북 길잡이 가이드 상담', price: 0, username: '' },
      { title: '노트북 PC 컴퓨터 ', subTitle: '고장, 문제, 수리, 상담, 구매, 설치, 부품교체', price: 0, username: '' },
      { title: '컴퓨터조립, 윈도우설치, AS관련', subTitle: '수리, 상담, 구매, 윈도우설치, AS관련', price: 0, username: '' },
      { title: 'it문제해결(하드웨어/소프트웨어/기타) 각종 상담 가능', subTitle: '윈도우설치, AS관련 (하드웨어/소프트웨어/기타) 각종 상담 가능', price: 0, username: '' },
      { title: '컴퓨터&노트북', subTitle: '&태블릿 외 IT기기 고급 상담', price: 0, username: '' },
      { title: '와이파이 무선 ', subTitle: '공유기, 모뎀, 셋톱박스 인터넷 랜선 정리 연결 지원', price: 0, username: '' },
      { title: '노트북 다양한 ', subTitle: '궁금점을 해결 해 드립니다', price: 0, username: '' },
      { title: '아이폰,아이패드 ', subTitle: '메인보드수리및 데이터복구 전문', price: 0, username: '' },
      { title: '컴퓨터&노트북', subTitle: '&태블릿 외 I관련 궁금한 내용 문의구매 상담', price: 0, username: '' },
      { title: '휴대폰 관련 궁금한 내용 문의', subTitle: '관련 궁금한 내용 문의관련 궁금한 내용 문의', price: 0, username: '' },
    ]
  })
}
</script>
<style lang="">

</style>

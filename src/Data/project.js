const imgBaseUrl = "images/projects";

export default {
  datas: [
    {
      title: "사이드 프로젝트 팀원 구하기 플랫폼(가명)",
      img: imgBaseUrl + "/DnD.png",
      detail:
        "D&D 활동때 진행했던 프로젝트 입니다. 사이드 프로젝트를 함께 진행할 팀원을 구하는 플랫폼입니다. (진행중)",
      skills: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      gitUrl: "https://github.com/perfect-matching/perfectmatching-frontend",
      deployUrl: "ironmental.net",
      date: "2019 July 13th",
      alt: "D & D 로고"
    },
    {
      title: "아이언 멘탈 - 키워드 메일링 서비스",
      img: imgBaseUrl + "/ironmental_1.png",
      detail:
        "이메일을 통해 그날 공부할 개발 키워드를 구독자에게 매주 보내주는 서비스입니다. 개발용어 및 상식을 '키워드'로 간결하게 정립시켜 보내주고, 사용자가 키워드 내용을 유추하여 키워드 상세 내용을 확인하고 비교 할 수 있도록 기획된 프로젝트입니다. 3명이 팀을 이루어 진행한 프로젝트이며, 역할은 프론트개발을 맡았습니다.",
      skills: ["Vue.js", "Node.js", "MongoDB", "AWS"],
      gitUrl: "https://github.com/Devrother/ironmental-frontend",
      deployUrl: "ironmental.net",
      date: "2019 June 31th",
      alt: "아이언 멘탈 사진"
    },
    {
      title: "TODO LIST",
      img: imgBaseUrl + "/todo.jpg",
      detail:
        "프로그래머스 섬머캠프 2차 개발과제로 제작했던 TODO LIST 입니다. 웹 애플리케이션의 기본 기능에 충실한 프로젝트입니다. 우선순위, 마감기한, 알림노출 등의 CRUD 이외의 기능이 함께 구현되어 있으며, 제출을 위해 AWS Light Sail이라는 서비스를 통해 간단하게 배포하였습니다. 1인 개발로 진행된 프로젝트입니다.",
      skills: ["Vue.js", "Node.js", "MySQL", "AWS Light Sail"],
      gitUrl: "https://github.com/KwonYG/TODO-List",
      deployUrl: null,
      date: "2019 May 20th",
      alt: "TODO LIST 사진"
    },
    {
      title: "부스트 코스 웹 UI 코스 프로젝트",
      img: imgBaseUrl + "/webUI.png",
      detail:
        "부스트 코스 웹 UI 코스 베타테스터로 진행했던 프로젝트입니다. 네이버에 쓰인 UI들을 똑같이 만들어 한 페이지 안에 마크업과 스티일링 되어있는 프로젝트입니다. 1인 개발로 진행된 프로젝트입니다.",
      skills: ["HTML", "CSS"],
      gitUrl:
        "다른 학습자의 학업에 영향을 끼칠 수 있어 공개 저장소나 블로그에 게시를 할 수 없는 프로젝트입니다. :) 양해 부탁드립니다.",
      deployUrl: null,
      date: "2019 Feb 20th",
      alt: "웹 UI 프로젝트 사진"
    },
    {
      title: "코딩백서",
      img: imgBaseUrl + "/codingWhitepaper.jpg",
      detail:
        "학교 수업에서 팀으로 진행하였던 프로젝트입니다. 누구나 쉽게 코드 관련 질문을 올릴 수 있고, 누구나 코드 리뷰어가 되어 자신의 지식을 공유할 수 있는 공개 코드 리뷰 사이트입니다. 질문자가 코드를 올리면 답변자가 코드 라인별로 코멘트를 달아 리뷰할 수 있도록 기획하였습니다. 3명이 팀을 이루어 진행한 프로젝트며, 백엔드개발 전체와 프론트 개발 보조를 맡았습니다.",
      skills: ["HTML", "CSS", "JavaScript", "MySQL", "Spring 4"],
      gitUrl: "https://github.com/KwonYG/CodingWhitepaper",
      deployUrl: null,
      date: "2018 December 10th",
      alt: "코딩백서 사진"
    },
    {
      title: "예약 서비스 프로젝트",
      img: imgBaseUrl + "/reservation.png",
      detail:
        "부스트에이스 2기 활동을 하며 진행했던 프로젝트입니다. 외부 라이브러리 사용을 최소화하여 진행된 프로젝트며 프론트는 순수 자바스크립트 위주, 백엔드는 JSP,Servlet 그리고 스프링 4 위주로 프로젝트가 진행되었습니다. 1인 개발 프로젝트입니다.",
      skills: ["JavaScript", "JSP", "Servlet", "MySQL", "Spring 4"],
      gitUrl:
        "다른 학습자의 학업에 영향을 끼칠 수 있어 공개 저장소나 블로그에 게시를 할 수 없는 프로젝트입니다. :) 양해 부탁드립니다.",
      deployUrl: null,
      date: "2018 May 31th",
      alt: "예약 서비스 사진"
    }
  ]
};

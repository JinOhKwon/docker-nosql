
# Docker 실행 명령어

1. 버전 확인
    - mongo -version

2. docker compose.yml 도커 등록되어있는 이미지 종료 및 삭제
    - docker-compose down 

3. docker-compose 빌드
    - docker-compose up --build

4. docker compose.yml 실행 명령어
    - docker-compose up -d  

5. 실행한 명령어 로그
    - docker-compose logs -f 

6. 터미널 접속 명령어
    - docker exec -it mongo-db bash

7. 도커에서 CLI로 몽고 DB 접속 
    - mongo -u "root" -p 

8. 백그라운드로 도커 실행
    - docker-compose -f xxx.yml up -d : 

# DB 접속
    ``` 
    mongo dev_life -u lifeDevUser -p : mongo [db] -u [userid] -p [패스워드]

    apt-get update : 라이브러이 업데이트
    apt-get install vim : vim 설치

    /etc/mongod.conf.orig : vim 으로 접속
    security:
        authorization : disabled 변경

    ```
    - mongo dev_life -u devLifeUser -p : mongo [db] -u [userid] -p [패스워드]

# 주의사항
    - password 설정시 끝에 @는 사용 x tpyeOrm에서 @ 구분자로 사용
    - 조건 : 도커를 한번이라도 실행 했을 경우
        init.js 변경하고 실행시 db 폴더 밑에 내용은 반드시 삭제 하고 진행 할것!!! 변경하지 않고 실행시 이전 비밀번호로 계속 진행됨

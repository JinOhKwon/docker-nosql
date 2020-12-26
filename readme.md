
# Docer 실행 명령어

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
    - mongo dev_life -u lifeDevUser -p : mongo [db] -u [userid] -p [패스워드]
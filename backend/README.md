# backend

https://github.com/sameersbn/docker-postgresql

http://postgresql.kr/docs/

http://vkuzel.blogspot.kr/2016/03/spring-boot-jpa-hibernate-atomikos.html

################################################################################

https://github.com/anthofo/spring-boot-security-oauth2-jwt

keytool -genkey -alias reservationkey -keyalg RSA -keystore keystore.jks -storepass reservationpass -dname "CN=Web Server,OU=Unit,O=Organization,L=City,S=State,C=US"

curl myClient:myClientSecret@localhost:9999/oauth/token -d grant_type=password -d username=user -d password=password

{"access_token":"abcdefg","token_type":"bearer","refresh_token":"abcdefg","expires_in":43199,"scope":"openid","jti":"88821280-ac82-4066-af0c-e7a602f1bce6"}                                                                                          

curl -H "Authorization: Bearer abcdef" localhost:9999/

//let str = new String("hello javascript");
/**
 *  1. charAt(index)  - index 번호에 해당하는 문자를 반환
 *    ex) str = "web he she";  str.charAt(2);  => b를 반환
 * 
 *  2. indexOf("찾을 문자"); - 찾은 문자의 인덱스를 반환, <->-1
 *     lastIndexOf("찾을 문자")
 *    ex) str = "그는 정말 개쉬키 였습니다.";  
 *        str.indexOf("개쉬키");  -- 6번 반환 , 없으면 -1을 반환
 *  3. match("찾을문자") - 찾은 문자를 반환 <-> null
 *  4. replace("바꿀문자", "새 문자") 
 *  5. search("찾을 문자") - 인덱스 번호를 반환
 *  6. slice(a, b) - a개의 문자를 자르고 b번째 이후를 자른 후 남은 문자 반환
 *     let str = "hel/lo j/avascript";  str.slice(3, 7);  - lo j
 *  7. substring(a, b) - a인덱스 부터 b인덱스 이전 구간 반환
 *    3, 7 =>      3, -3 => 
 *  8. substr(a, 문자 개수) - a인덱스 부터 지정된 문자 개수 만큼 
 *    3, 2 
 *  9. split("문자") - 지정한 문자를 기준으로 문자 데이터를 나누어 배열에 저장
 *  10.(덜 중요) toLowerCase() - 윈도우에서 개발 => 리눅스 서비스
 *  11.(덜 중요) toUpperCase()
 *  12. length - 문자열 길이
 *  13. concat('새로운문자') - 문자열 결합
 *  14. charCodeAt(index) - 문자열 해당 인덱스의 아스키코드 값을 반환
 *  15. fromCharCode(아스키코드 값) - 해당 문자를 반환
 *  16. trim()  - 문자 앞 뒤 공백을 제거
 */

const str = "Hello Thank you good luck to you";
/**
 * 1. 인덱스 16에 저장된 문자를 출력하세요.
 * 2. 문자열 왼쪽부터 제일 먼저 발견되는 you의 인덱스 값을 출력하세요.
 * 3. 문자열 인덱스 16이후에 첫 번째로 발견되는 you의 인덱스 값을 출력하세요.
 * 4. 문자열 오른쪽부터 왼쪽방향으로 제일 먼저 발견되는 you의 인덱스 값.
 * 5. 문자열 인덱스 25부터 왼쪽 방향으로 제일 먼저 발견되는 you 인덱스 값
 * 6. 왼쪽부터 첫 번째 발견되는 luck를 찾아 반환
 * 7. search 로 you를 찾아 인덱스값 반환
 * 8. 문자 인덱스 21부터 4글자를 반환
 * 9. 문자 인덱스 6부터 12까지 반환
 * 10. 왼쪽부터 제일 먼저 발견된 you를 me로 바꾸시오.
 */
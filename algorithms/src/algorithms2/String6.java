package algorithms2;

import java.util.Scanner;

//중복문자 제거
class String6 {
	public String solution(String str) {
		String answer="";
		for(int i=0; i<str.length(); i++) {
			if(str.indexOf(str.charAt(i))==i)
				answer+=str.charAt(i);
		}
		return answer;
	}
	
	
	public static void main(String[] args) {
		String6 T = new String6();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		System.out.println(T.solution(str));
	}

}

package algorithms3;

import java.util.Scanner;

class String6 {
	public String solution(String str) {
		String answer = "";
		for(int i=0; i<str.length(); i++) {
			if(str.indexOf(str.charAt(i))==i) answer+= str.charAt(i);
			//str.indexOf(str.charAt(i)) 하고 i 가 같으면 answer에 str.charAt(i)을 넣어라
			//  str.indexOf(str.charAt(i)는 첫번째 발견한 문자에 위치 
			//  i 는 01234 쭉 이어진다.
			//  str.charAt(i) 문자 
			
			//System.out.println(str.charAt(i)+" "+i+" "+str.indexOf(str.charAt(i)));
			
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

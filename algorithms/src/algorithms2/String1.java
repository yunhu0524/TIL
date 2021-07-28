package algorithms2;

import java.util.Scanner;

//입력한 문자의 계수

 class String1 {
	public String solution(String str) {
		String answer="";
		for(char x : str.toCharArray()) {
			if(Character.isLowerCase(x)) { 
				answer+=Character.toUpperCase(x);
			}
			else {
				answer+=Character.toLowerCase(x);
			}
		}
	
		return answer;
	}
	
	
	public static void main(String[] args) {
		String1 T = new String1();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		System.out.println(T.solution(str));
	}

}

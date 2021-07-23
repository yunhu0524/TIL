package algorithms;

import java.util.Scanner;

class String9 {
	public int solution(String s) {
		int answer = 0 ;
		//String answer = "";
		for(char x: s.toCharArray()) {
			//if(Character.isDigit(x)) answer += x;
			if(x>=48 && x<=57) {
				answer = answer*10+(x-48);
			}
		}
		
		//return Integer.parseInt(answer);
		return answer;
	}

	public static void main(String[] args) {
		String9 T = new String9();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		System.out.println(T.solution(str));
	}

}

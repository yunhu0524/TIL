package algorithms2;

import java.util.Scanner;

class String9 {
	public int solution(String str) {
		String answer = "";
		
		for(char x : str.toCharArray()) {
			if(Character.isDigit(x)) {
				answer += x;
			}
		}
		
		return Integer.parseInt(answer);
	}

	public static void main(String[] args) {
		String9 T = new String9();
		Scanner sc = new  Scanner(System.in);
		
		String str = sc.next();
		System.out.println(T.solution(str));
		
	}

}

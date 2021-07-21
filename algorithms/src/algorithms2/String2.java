package algorithms2;

import java.util.Scanner;

class String2 {
	public int solution(String str, char t) {
		int answer = 0;
		str = str.toUpperCase();
		for(char x : str.toCharArray()) {
				if(x==t) answer++;
			}
		return answer;
	}


	public static void main(String[] args) {
		
		String2 T = new String2();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		char c = sc.next().charAt(0);
		System.out.println(T.solution(str,c));
	}

}

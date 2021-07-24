package algorithms2;

import java.util.Scanner;

class String8 {
	public String solution(String s) {
		String answer = "No";
		s=s.toUpperCase().replace("^[A-z]", " ");
		String tmp = new StringBuilder(s).reverse().toString();
		if(s.equals(tmp)) {
			answer ="Yes";
		}
		
		return answer;
}

	public static void main(String[] args) {
		String8 T = new String8();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine();
		System.out.println(T.solution(str));
	}

}

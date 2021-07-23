package algorithms;

import java.util.Scanner;
//앞으로 읽으나 뒤로읽으나 같으면 yes 다르면 no
class String7 {
	public String solution(String str) {
		
	/*  String answer = "Yes";
		int len = str.length();
		for(int i=0; i<len/2; i++) {
			if(str.charAt(i)!=str.charAt(len-i-1)) retrun "No";
		}
		return answer;
	}
	*/
		
		
		String answer = "No";
		String tmp = new StringBuilder(str).reverse().toString();
		if(str.equalsIgnoreCase(tmp)) {
			answer="Yes";
		}
		return answer;
	}

	public static void main(String[] args) {
		String7 T = new String7();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.next();
		System.out.println(T.solution(str));
	}

}

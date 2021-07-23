package algorithms;

//문장 회문 확인
import java.util.Scanner;

class String8 {
	public String solution(String s) {
		String answer="No";
		s=s.toUpperCase().replaceAll("[^A-Z]", "");
		// 대문자 A-Z 가 아니면 " " 비워라 
		String tmp = new StringBuilder(s).reverse().toString();
		if(s.equals(tmp)) answer="Yes";
		
		return answer;
	}

	public static void main(String[] args) {
		String8 T = new String8();
		Scanner sc = new Scanner(System.in);
		
		String str = sc.nextLine(); // 한줄을 읽어야된다
		System.out.println(T.solution(str));
	}

}

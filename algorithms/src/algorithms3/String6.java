package algorithms3;

import java.util.Scanner;

class String6 {
	public String solution(String str) {
		String answer = "";
		for(int i=0; i<str.length(); i++) {
			if(str.indexOf(str.charAt(i))==i) answer+= str.charAt(i);
			//str.indexOf(str.charAt(i)) �ϰ� i �� ������ answer�� str.charAt(i)�� �־��
			//  str.indexOf(str.charAt(i)�� ù��° �߰��� ���ڿ� ��ġ 
			//  i �� 01234 �� �̾�����.
			//  str.charAt(i) ���� 
			
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

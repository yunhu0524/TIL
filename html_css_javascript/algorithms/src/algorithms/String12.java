package algorithms;

import java.util.Scanner;

class String12 {
	public String solution(String s,int n) {
		String answer="";
		for(int i=0; i<n; i++) {
			String tmp = s.substring(0,7).replace('#', '1').replace('*', '0');
			int num=Integer.parseInt(tmp,2); // 2�� ���� 10������ ��ȯ
			answer +=(char)num; //10������ ���ڷ�
			System.out.println(tmp);
			s=s.substring(7);
		}
		
		return answer;
	}

	public static void main(String[] args) {
		String12 T = new String12();
		Scanner sc = new Scanner(System.in);
		
		int n = sc.nextInt();
		String str = sc.next();
		System.out.println(T.solution(str,n));
	}

}

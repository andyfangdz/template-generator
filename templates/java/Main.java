class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        {{#params}}
        {{repr}} {{name}} = {{parser}}(scanner.nextLine());
        {{/params}}
        Solution solution = new Solution();
        String result = {{return.encoder}}(solution.{{method}}({{#params}}{{name}}{{#unless @last}}, {{/unless}}{{/params}}));
        System.out.println(result);
    }
}

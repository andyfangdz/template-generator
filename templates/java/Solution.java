class Solution {
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{return.desc}}
     */
    public {{return.repl}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};

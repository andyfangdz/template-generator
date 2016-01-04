class Solution {
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{return.desc}}
     */
    public {{return.repr}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};

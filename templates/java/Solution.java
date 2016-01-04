class Solution {
    /*
     {{#params}}
     * param {{name}}: {{desc}}
     {{/params}}
     * return: {{retdesc}}
     */
    public {{rettype}} {{method}}({{#params}}{{repr}} {{name}}{{#unless @last}}, {{/unless}}{{/params}}) {
        // {{hint}}
    }
};

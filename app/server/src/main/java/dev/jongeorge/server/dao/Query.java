package dev.jongeorge.server.dao;

public final class Query {
 final static String GET_ALL_PROJECTS = "" +
         "{\"query\":\"" +
         "   {\\n" +
         "    projects {\\n" +
         "    title\\n" +
         "    clientCompany\\n" +
         "    clientDepartment\\n" +
         "    contribution\\n" +
         "    description\\n" +
         "  }\\n" +
         "}\",\"variables\":{}}";
}

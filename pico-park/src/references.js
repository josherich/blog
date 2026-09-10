// Video IDs are taken from the user-supplied Classic Edition playlist.
export const playlistURL='https://www.youtube.com/playlist?list=PL03GkmF32okT9-Q7l-d8C2luZ8cUEBbQI';
const ids=['g_BdbHqnUWI','mC39aJjhsIY','eK0wGHIEW4o','c_llMLc1Yk4','6bv8IjGgl9o','9O1rnFhzJbA','xuGsecJybeY','qzjnxEie5OE','lyWcV3ubmO0','marWRsglEHw','9BjWF34lYgU','txJaGPL179Y','YfApMosfAw8','8oaU6eOy2tI','iA_ED7HyXoo','oK6wb2R97C0','9eKGUVBOBKM','u1v1VDQDw5E','1tn3k6qcFMA','0rJ02-ReOKI'];
export const referenceFor=id=>ids[id-1]?`https://www.youtube.com/watch?v=${ids[id-1]}`:null;

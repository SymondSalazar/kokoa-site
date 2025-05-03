import type { PageLoad } from "./$types";
import members from "$lib/data/members.json";
import { error } from "@sveltejs/kit";


export const load = (async ({params}) => {
    const name = params.name.split("_").join(" ");
    const member = members.find((m)=> m.name == name)
    if(!member){
        throw error(404,"No existe este miembro")
    }
    return {
        title: `Chocomiembro > ${member.name} `,
        description: `Perfil del miembro ${name}`,
        member,
    };
}) satisfies PageLoad;
#![feature(plugin)]
#![plugin(rocket_codegen)]

extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Return test"
}

#[get("/inventory")]
fn inventory() -> &'static str {
    "Inventory"
}

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();
}

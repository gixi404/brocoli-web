import { Scissors, TrendingUp, Music, Camera, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 flex gap-x-2 justify-center items-center">
            <svg
              height="30px"
              width="40px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  style="fill:#71A517;"
                  d="M358.863,261.909c-3.605,9.007-7.793,20.107-12.178,32.966 c-16.997,49.815-36.943,126.092-36.943,209.815H202.245c0-83.723-19.946-160-36.931-209.815 c-4.386-12.872-8.573-23.972-12.178-32.979c10.989-1.437,21.011-5.909,29.213-12.55c11.088,14.42,26.314,25.484,43.893,31.443 c1.747,11.509,3.481,24.046,5.092,37.488c0.458,3.704,0.892,7.483,1.313,11.323c1.338,11.906,11.36,20.937,23.34,20.937H256 c11.98,0,22.015-9.031,23.34-20.937c0.421-3.841,0.855-7.619,1.301-11.323c1.611-13.442,3.345-25.979,5.117-37.488 c17.567-5.959,32.793-17.022,43.881-31.443C337.852,255.988,347.875,260.472,358.863,261.909z"
                ></path>{" "}
                <g>
                  {" "}
                  <path
                    style="fill:#648E13;"
                    d="M196.875,300.312c8.621,7.128,18.546,12.737,29.367,16.405c1.672,0.57,3.37,1.09,5.092,1.561 c-1.611-13.442-3.345-25.979-5.092-37.488c-12.966-4.396-24.644-11.573-34.333-20.82l0,0c-1.698-1.62-3.335-3.304-4.908-5.047 c-0.028-0.031-0.057-0.061-0.085-0.093c-0.71-0.788-1.401-1.592-2.084-2.405c-0.089-0.107-0.182-0.208-0.271-0.315 c-0.754-0.907-1.493-1.827-2.213-2.763c-8.201,6.64-18.224,11.113-29.213,12.55c3.605,9.007,7.792,20.107,12.178,32.979 c16.985,49.815,36.931,126.092,36.931,209.815h29.733C231.978,423.952,213.43,350.147,196.875,300.312z"
                  ></path>{" "}
                  <path
                    style="fill:#648E13;"
                    d="M358.863,261.909c-3.605,9.007-7.793,20.107-12.178,32.966c-6.244-2.242-11.992-5.513-17.047-9.601 c-11.088,14.42-26.314,25.484-43.881,31.443c-1.685,0.57-3.395,1.09-5.117,1.561c1.611-13.442,3.345-25.979,5.117-37.488 c17.567-5.959,32.793-17.022,43.881-31.443C337.852,255.988,347.875,260.472,358.863,261.909z"
                  ></path>{" "}
                </g>{" "}
                <path
                  style="fill:#9AD14B;"
                  d="M358.863,268.104c-10.989-1.437-21.011-5.922-29.225-12.562 c-11.088,14.42-26.314,25.484-43.881,31.443c-9.341,3.159-19.351,4.869-29.758,4.869c-10.407,0-20.417-1.71-29.758-4.869 c-17.58-5.959-32.805-17.022-43.893-31.443c-8.201,6.64-18.224,11.113-29.213,12.55c-2.515,0.335-5.092,0.508-7.693,0.508 c-0.31,0-0.607-0.025-0.917-0.025c-4.894,27.503-28.903,48.39-57.806,48.39c-32.434,0-58.735-26.289-58.735-58.735 c0-10.345,2.688-20.07,7.396-28.519C14.148,216.505,0,192.966,0,166.108c0-41.341,33.511-74.853,74.852-74.853 c3.531,0,7.012,0.273,10.419,0.743c5.835-35.531,36.671-62.65,73.849-62.65c15.337,0,29.597,4.633,41.477,12.55 c9.676-20.441,30.476-34.589,54.597-34.589c24.443,0,45.479,14.544,54.981,35.432c12.116-8.424,26.822-13.392,42.704-13.392 c37.178,0,68.014,27.119,73.837,62.65c3.407-0.471,6.888-0.743,10.431-0.743c41.341,0,74.853,33.511,74.853,74.853 c0,26.859-14.148,50.397-35.395,63.604c4.708,8.449,7.396,18.174,7.396,28.519c0,32.446-26.289,58.735-58.722,58.735 c-28.915,0-52.924-20.887-57.806-48.39c-0.31,0-0.619,0.025-0.929,0.025C363.943,268.599,361.378,268.426,358.863,268.104z"
                ></path>{" "}
                <path
                  style="fill:#90BC42;"
                  d="M117.185,258.23c0-10.345,2.688-20.07,7.396-28.519c-21.234-13.206-35.382-36.745-35.382-63.604 c0-41.341,33.511-74.853,74.852-74.853c3.531,0,7.012,0.273,10.419,0.743c67.902-101.401,121.296-60.567,125.322-64.98 c-11.038-12.105-26.926-19.709-44.597-19.709c-24.121,0-44.921,14.148-54.597,34.589c-11.881-7.916-26.14-12.55-41.477-12.55 c-37.178,0-68.014,27.119-73.849,62.65c-3.407-0.471-6.888-0.743-10.419-0.743C33.511,91.255,0,124.767,0,166.108 c0,26.859,14.148,50.397,35.382,63.604c-4.708,8.449-7.396,18.174-7.396,28.519c0,32.446,26.301,58.735,58.735,58.735 c17.85,0,33.826-7.973,44.593-20.544C122.513,286.152,117.185,272.818,117.185,258.23z"
                ></path>{" "}
              </g>
            </svg>{" "}
            El Fenómeno del Corte Brócoli
          </h1>
          <p className="text-gray-600 mt-1 text-center w-full">
            Un análisis de la tendencia capilar entre adolescentes españoles
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-12%20191044-Y8mssMKDmuC0mphl4oKAiUQ3owr1tm.png"
            alt="Jóvenes españoles con el corte brócoli"
            width={800}
            height={450}
            className="rounded-lg w-full h-auto object-cover"
          />
          <p className="text-sm text-gray-500 mt-2 italic">
            Jóvenes españoletes luciendo el popular corte brócoli en un evento
            deportivo
          </p>
        </div>

        <article className="prose max-w-none">
          <p className="text-lg leading-relaxed text-gray-800">
            El "corte brócoli" se ha convertido en uno de los peinados más
            reconocibles entre los adolescentes españoles en los últimos años.
            Este estilo, caracterizado por su volumen en la parte superior y los
            lados más cortos, ha trascendido de ser una simple moda a
            convertirse en un fenómeno cultural.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-gray-900">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            ¿Por qué se ha vuelto tan popular?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Music className="h-4 w-4 text-emerald-600" />
                Influencia de la música urbana
              </h3>
              <p className="text-gray-700">
                Artistas del trap y reggaetón español han popularizado este
                estilo, convirtiéndolo en un símbolo de la cultura urbana
                contemporánea.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <Camera className="h-4 w-4 text-emerald-600" />
                Redes sociales y viralidad
              </h3>
              <p className="text-gray-700">
                TikTok e Instagram han sido plataformas clave para la difusión
                de este estilo, con miles de videos mostrando el proceso de
                corte y peinado.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-gray-900">
            <Scissors className="h-5 w-5 text-emerald-600" />
            Anatomía del corte brócoli
          </h2>

          <p className="text-gray-800 leading-relaxed">
            El corte brócoli se caracteriza por mantener el pelo rizado y con
            volumen en la parte superior, mientras que los laterales se
            mantienen cortos o degradados. Esta combinación crea una silueta que
            recuerda a la forma de un brócoli, de ahí su nombre.
          </p>

          <div className="my-8 bg-emerald-50 p-6 rounded-lg border border-emerald-100">
            <h3 className="font-medium text-gray-900 mb-3">
              Características principales:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Volumen y rizos en la parte superior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Laterales y nuca rapados o con degradado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Flequillo rizado cayendo sobre la frente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>
                  Mantenimiento con productos específicos para definir rizos
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-gray-900">
            <Heart className="h-5 w-5 text-emerald-600" />
            Identidad y pertenencia
          </h2>

          <p className="text-gray-800 leading-relaxed">
            Más allá de la estética, el corte brócoli representa para muchos
            adolescentes una forma de expresar su identidad y pertenecer a un
            grupo social. En una etapa vital donde la aceptación por parte de
            los iguales es fundamental, lucir este peinado puede significar
            formar parte de una comunidad con códigos y referencias compartidas.
          </p>

          <p className="text-gray-800 leading-relaxed mt-4">
            Los jóvenes que adoptan este estilo suelen compartir también gustos
            musicales, formas de vestir y expresiones lingüísticas, creando así
            una subcultura juvenil con características propias dentro de la
            sociedad española contemporánea.
          </p>
          <div className="flex justify-center items-center ">
            <img
              src="../jaja.jpeg"
              className="w-[200px] h-[200px] rounded-lg my-4"
            />
          </div>

          <blockquote className="italic border-l-4 border-emerald-500 pl-4 my-6 text-gray-700">
            "El corte brócoli no es solo un peinado, es una declaración de
            intenciones, una forma de decir 'pertenezco a esta generación y a
            esta cultura'."
          </blockquote>

          <p className="text-gray-800 leading-relaxed">
            Como toda moda juvenil, es probable que con el tiempo evolucione o
            sea reemplazada por nuevas tendencias, pero sin duda el "corte
            brócoli" ya ha dejado su huella en la cultura juvenil española de
            principios de los años 2020.
          </p>
        </article>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>© 2025 · Todos los brócolis reservados</p>
        </div>
      </footer>
    </div>
  );
}

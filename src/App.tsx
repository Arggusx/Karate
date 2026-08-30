import { useLayoutEffect } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { Toaster } from 'sonner'
import {
  LayoutDashboard, Users, UserPlus, CalendarDays,
  IdCard, CalendarRange, Wallet,
} from 'lucide-react'

import Header from "./components/layout/Header"
import Footer from './components/layout/Footer'
import Home from './routes/Home'
import { Fundaments } from './routes/Fundaments'
import { Historia } from './routes/Historia'
import Beneficios from './routes/Beneficios'
import { Tecnicas } from './routes/Tecnicas'
import { Curiosidades } from './routes/Curiosidades'
import { KataPage } from './routes/KataPage'

import { AuthProvider } from './auth/AuthContext'
import { RotaProtegida } from './auth/RotaProtegida'
import { Login } from './routes/Login'
import { PortalLayout } from './routes/PortalLayout'
import { VisaoGeral } from './routes/admin/VisaoGeral'
import { GestaoAlunos } from './routes/admin/GestaoAlunos'
import { CadastroAluno } from './routes/admin/CadastroAluno'
import { AgendaAulas } from './routes/admin/AgendaAulas'
import { PainelAluno } from './routes/aluno/PainelAluno'
import { Carteirinha } from './routes/aluno/Carteirinha'
import { AgendaSemanal } from './routes/aluno/AgendaSemanal'
import { Financeiro } from './routes/aluno/Financeiro'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

/**
 * Casca do site institucional. O portal e o login ficam FORA dela: cabecalho e
 * rodape de marketing no meio de um painel de gestao poluem a tela e ainda
 * ofereceriam navegacao para fora do contexto de trabalho.
 */
function LayoutSite() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const ABAS_ADMIN = [
  { para: '/app/admin', rotulo: 'Visão Geral', icone: LayoutDashboard, fim: true },
  { para: '/app/admin/alunos', rotulo: 'Alunos & Turmas', icone: Users },
  { para: '/app/admin/cadastrar', rotulo: 'Cadastrar Aluno', icone: UserPlus },
  { para: '/app/admin/agenda', rotulo: 'Agenda & Conteúdos', icone: CalendarDays },
]

const ABAS_ALUNO = [
  { para: '/app/aluno', rotulo: 'Carteirinha', icone: IdCard, fim: true },
  { para: '/app/aluno/agenda', rotulo: 'Agenda Semanal', icone: CalendarRange },
  { para: '/app/aluno/financeiro', rotulo: 'Financeiro', icone: Wallet },
]

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* ─── Site institucional ─────────────────────────────────── */}
            <Route element={<LayoutSite />}>
              <Route path='/' element={<Home />} />
              <Route path='/historia' element={<Historia />} />
              <Route path='/fundamentos' element={<Fundaments />} />
              <Route path='/beneficios' element={<Beneficios />} />
              <Route path='/tecnicas' element={<Tecnicas />} />
              <Route path='/curiosidades' element={<Curiosidades />} />
              <Route path='/katas/:slug' element={<KataPage />} />
              <Route path='/linhagem' element={<Navigate to='/historia' replace />} />

              {/* Retrocompatibilidade com as rotas antigas */}
              <Route path='/Fund' element={<Fundaments />} />
              <Route path='/Reishiki' element={<Historia />} />
            </Route>

            {/* ─── Autenticação ───────────────────────────────────────── */}
            <Route path='/login' element={<Login />} />

            {/* ─── Portal do Professor ────────────────────────────────── */}
            <Route
              path='/app/admin'
              element={
                <RotaProtegida papel='admin'>
                  <PortalLayout titulo='Portal do Professor' abas={ABAS_ADMIN} />
                </RotaProtegida>
              }
            >
              <Route index element={<VisaoGeral />} />
              <Route path='alunos' element={<GestaoAlunos />} />
              <Route path='cadastrar' element={<CadastroAluno />} />
              <Route path='agenda' element={<AgendaAulas />} />
            </Route>

            {/* ─── Portal do Aluno ────────────────────────────────────── */}
            <Route
              path='/app/aluno'
              element={
                <RotaProtegida papel='aluno'>
                  <PortalLayout titulo='Portal do Aluno' abas={ABAS_ALUNO} />
                </RotaProtegida>
              }
            >
              <Route element={<PainelAluno />}>
                <Route index element={<Carteirinha />} />
                <Route path='agenda' element={<AgendaSemanal />} />
                <Route path='financeiro' element={<Financeiro />} />
              </Route>
            </Route>

            {/* /app sozinho: manda para o portal do papel de quem está logado. */}
            <Route
              path='/app'
              element={
                <RotaProtegida>
                  <Navigate to='/app/aluno' replace />
                </RotaProtegida>
              }
            />

            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  )
}

export default App

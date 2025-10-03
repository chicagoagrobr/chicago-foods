import nome from '../assets/nome.avif';
import logo from '../assets/cf.avif';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-green-800 text-orange-100 text-sm font-medium">
      <div className="max-w-7xl mx-auto py-8 px-4 grid medium:grid-cols-3 gap-4 items-start">

        <div className="flex flex-col medium:items-left gap-1 -mt-1">
          <div className="flex items-center space-x-1">
            <img src={logo} alt={t('footer.logoAlt')} className="w-[105px]" />
            <img src={nome} alt={t('footer.nameAlt')} className="h-[57px]" />
          </div>
          <p className="medium:text-left leading-relaxed">
            {t('footer.address')}
          </p>
        </div>

        <div className="medium:col-span-2 flex flex-col medium:flex-row justify-end gap-8">

          <div className="flex flex-col items-start text-left gap-2">
            <h3 className="text-lg">{t('footer.partnerTitle')}</h3>
            <p className="text-sm max-w-xs">{t('footer.partnerText')}</p>
            <Link
              to="/contato"
              className="text-orange-300 text-base hover:text-orange-400"
              onClick={() => window.scrollTo(0, 0)}
            >
              {t('footer.partnerLink')}
            </Link>
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <p>&copy; {new Date().getFullYear()} Chicago Foods</p>
            <p>{t('footer.rights')}</p>
            <Link to="/politica" className="text-orange-300 hover:text-orange-400">
              {t('footer.privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
